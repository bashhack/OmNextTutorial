(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

;; (1)
;; (println "Hello world!")


;; =============================================================================
;; Your First Component
;; =============================================================================

;; (2) Basic Component
;; (defui HelloWorld
;;   Object
;;   (render [this]
;;           (dom/div nil "Hello, world!")))

;; (def hello (om/factory HelloWorld))

;; (js/ReactDOM.render (hello) (gdom/getElement "app"))

;; -------------
;; The `ns` form
;; -------------

;; `ns` is a form which we use to declare namespaces (modules), and here
;; we include `goog.dom` from the Google Closure Compiler and `om.next`
;; and `om.dom` from Om Next.

;; -------
;; `defui`
;; -------

;; Om Next uses a macro for declaring its components, called `defui` that
;; supports many of ClojureScript's `deftype` and `defrecord` with some
;; modifications to support React components.

;; Om Next differs from Om (Previous) in that Om Next components are plain
;; JS classes. The component then declares one JS `Object` method - `render`

;; Before an Om Next component can be created, a factory must be implemented
;; from the component class. This function returned from `om.next/factory`
;; has the same method signature as pure React components with the exception
;; that the first argument is (typically) an immutable data structure.

;; --------
;; `render`
;; --------

;; This returns an Om Next or React component - components are usually created
;; from two ro more arguments. The first argument will be `props` - the
;; properties that will customize the component in some way. The remaining
;; arguments will be `children`, the sub-components hosted by a node.


;; =============================================================================
;; Parameterizing Your Components
;; =============================================================================

;; (3) Adding Props to Component
;; (defui HelloWorld
;;   Object
;;   (render [this]
;;           (dom/div nil (get (om/props this) :title))))

;; (def hello (om/factory HelloWorld))

;; (js/ReactDOM.render
;;  (hello {:title "Hello, world!"})
;;  (gdom/getElement "app"))

;; (4) Utilizing Abstraction Component
;; (defui HelloWorld
;;   Object
;;   (render [this]
;;           (dom/div nil (get (om/props this) :title))))

;; (def hello (om/factory HelloWorld))

;; (js/ReactDOM.render
;;  (apply dom/div nil
;;         (map #(hello {:react-key %
;;                       :title (str "Hello " %)})
;;              (range 3)))
;;  (gdom/getElement "app"))


;; =============================================================================
;; Adding State
;; =============================================================================

;; All of our inital components so far have been stateless Om Next components.
;; We typically need to state involved to create meaningful programs. In a
;; typically React application, we might end up using stateful components, but
;; with Om Next we introduce state into our apps via a single source of truth -
;; the global `app-state` atom.

;; All state changes are then handled via the `reconciler`, that accepts novelty,
;; merges it into the app state, finds all components which might be affected,
;; and scheules a re-render.

;; (5) Naive Approach to Adding State
;; (def app-state (atom {:count 0}))

;; (defui Counter
;;   Object
;;   (render [this]
;;           ;; NOTE: Helpful in rembering that instead of `{symbol :symbol}`
;;           ;;       we can use a shortcut with the `:keys` keyword followed by
;;           ;;       a vector `{:keys [vector of symbols]}`
;;           ;;       https://gist.github.com/john2x/e1dca953548bfdfb9844
;;           (let [{:keys [count]} (om/props this)]
;;             (dom/div nil
;;                      (dom/span nil (str "Count: " count))
;;                      (dom/button
;;                       #js {:onClick
;;                            (fn [e]
;;                              (swap! app-state update-in [:count] inc))}
;;                       "Click me!")))))

;; (def reconciler
;;   (om/reconciler {:state app-state}))

;; (om/add-root! reconciler
;;               Counter (gdom/getElement "app"))

;; NOTE: om.net/add-root! takes a reconciler, a root class, and a DOM element.
;;       It does not instantiate the component, unlike ReactDOM.render. The
;;       reconciler will do this on our behalf as it may need to request data
;;       from an endpoint first.


;; =============================================================================
;; Global State Coupling
;; =============================================================================

;; Our program has an issue - it's too deeply coupled!
;; The counter has direct knowledge of the structure of the state atom.
;; To prevent such coupling, Om Next relies on client server architecture.


;; =============================================================================
;; Client Server Architecture
;; =============================================================================


;; Om Next wants us to think about the separation of components and code that
;; reads/modifies global state. Critically, the following design patterns work
;; even if the app we might bild is totally client-side.

;; React-based systems tend to mix control logic into components, whereas Om Next
;; moves all state management into a router abstraction.

;; Components must declaratively request data (read) from the router. Instead
;; of mutating app state, they also request app state transitions (mutations)
;; and the router will apply the state changes.

;; Apps are designed like this to make introducing custom stores
;; (i.e., DataScript) without changing any components. This also allows us to
;; seamlessly partition app state between local client logic and remote server
;; logic.


;; =============================================================================
;; Routing
;; =============================================================================


;; Client server architecture requires a protocol of communication between the
;; client and server - this protocol must be able to describe reads and
;; mutations.

;; Typically, we would use REST as a protocol, but REST is - at its core - not
;; very expressive, with its base unit - the URL - being rather divorced from
;; the representation of state within the app.

;; Om Next uses a simple data representation of client demands, a variant on
;; s-expressions, EDN (`https://github.com/edn-format/edn`). Our goal here is
;; to avoid the tradeoffs present in string based routing.

;; Om Next calls this process `parsing`, rather than routing.

;; ---------------------------
;; Parsing & Query Expressions
;; ---------------------------

;; Let's look at parsing in isolation to better understand the concept.
;; There are two types of expressions which parsing handles - reads and
;; mutations.

;; Reads should return the requested app state, while mutations should
;; transition the app state to some new state and describe the change.

;; We can create a parser by providing two functions that serve to
;; model reads and mutations:

;; (def my-parser (om.next/parser {:read read-fn :mutate mutate-fn}))

;; A parser takes a "query expression" and evaluates it using the
;; provided read and mutate implementations.

;; Inspired by Datomic Pull Syntax, an Om Next query expression is a
;; vector that enumerates the state reads and state mutations.

;; As an example, we might grab a todo item:

;; [{:todos/list [:todo/created :todo/title]}]

;; While updating a todo list item might be:

;; [{:todo/update {:id 0 :todo/title "Get Orange Juice"}}]

;; ---------------
;; A Read Function
;; ---------------

;; The signature of a read function is:
;; [env key params]

;; `env` is a hash map containing context necessary to complete the read
;; `key` is the key being requested to be read
;; `params` is a hash map of params that can customize the read, often empty!

;; A read function could look like this:
;; (defn read
;;   [{:keys [state] :as env} key params]
;;   (let [st @state]
;;     (if-let [[_ v] (find st key)]
;;       {:value v}
;;       {:value :not-found})))

;; Here, our function reads from a `:state` property supplied by the `env`
;; param. Our function then checks if the app state contains the key.
;; Finally, we return a hash map containing a `:value` entry.

;; With our `read` function in place, we could create a parser:
;; (def my-parser (om/parser {:read read}))

;; Now, we can read Om Next query expressions:
;; (def my-state (atom {count 0}))
;; (my-parser {:state my-state} [:count :title])
;; ; => {:count 0, :title :not-found}


;; We supplied the `env` param, and a query expression as a vector, in order to
;; be returned a map.

;; Om Next's reconciler will invoke the parser for us and pass along the `:state`
;; parameter, and when writing a backend parser we would supply `env` ourselves.

;; -------------------
;; A Mutation Function
;; -------------------

;; To create a `mutate` function, we use the same signature as our `read`, but
;; our return value will be different.

;; (defn mutate
;;   [{:keys [state] :as env} key params]
;;   (if (= 'increment key)
;;     {:value {:keys [:count]}
;;      :action #(swap! state update-in [:count] inc)}
;;     {:value :not-found}))

;; Here, we check that the key is a mutation we want to implement. If it is,
;; we return a map containing two keys, `:value` and `:action` (a thunk -
;; a function that takes no arguments). Mutations should return a map for
;; `:value`. The map can contain two keys (`:keys` and/or `:tempids`).
;; The `:keys` vector is a convenience that communicates what read operations
;; should follow a mutation.

;; `:action` is a function that takes no args, and which should transition
;; app-state.

;; IMPORTANT!: You should never run side effects in the body
;;             of a mutate function yourself!

;; With our mutate and read functions defined, we could then write:

;; (def my-parser (om/parser {:read read :mutate mutate}))
;; (my-parser {:state my-state} '[(increment)])
;; @my-state
;; ; => {:count 1}


;; =============================================================================
;; Components With Queries & Mutations
;; =============================================================================

;; (6) Adding Queries and Mutations
;; (def app-state (atom {:count 0}))

;; (defn read [{:keys [state] :as env} key params]
;;   (let [st @state]
;;     (if-let [[_ value] (find st key)]
;;       {:value value}
;;       {:value :not-found})))

;; (defn mutate [{:keys [state] :as env} key params]
;;   (if (= 'increment key)
;;     {:value {:keys [:count]}
;;      :action #(swap! state update-in [:count] inc)}
;;     {:value :not-found}))

;; (defui Counter
;;   static om/IQuery
;;   (query [this]
;;          [:count])
;;   Object
;;   (render [this]
;;           (let [{:keys [count]} (om/props this)]
;;             (dom/div nil
;;                      (dom/span nil (str "Count: " count))
;;                      (dom/button
;;                       #js {:onClick
;;                            (fn [e] (om/transact! this '[(increment)]))}
;;                       "Click me!")))))

;; (def reconciler
;;   (om/reconciler
;;    {:state app-state
;;     :parser (om/parser {:read read :mutate mutate})}))

;; (om/add-root! reconciler
;;               Counter (gdom/getElement "app"))

;; Most of this is familiar, of course - but there are few new additions
;; to our refactor:

;; 1) Implement `om.next/IQuery` -
;;    Om Next declare data they wish to read via implementing a protocol,
;;    `om.next/IQuery`. This method returns a query expression. We add `static`
;;    (which is required) in order to ensure the method is attached to the class.
;;    This is also done so the reconciler can determine the query required
;;    to display the app without instantiating any components.

;; 2) Invoke `om.next/transact!` -
;;    The counter calls `om.next/transact!` with the desired transaction rather
;;    than touchin the app state directly. This removes any tight coupling.

;; 3) Provide a parser to the reconciler -
;;    The reconciler takes our custom parser, and all ap state reads/mutations
;;    will go through it. The reconciler will populate the `env` param with
;;    the necessary context needed to make any decisions about reads and
;;    mutations including whatever `:state` param was provided to the
;;    reconciler.

;; NOTE: We can "replay" transactions via `om/from-history`:
;;       (om/from-history reconciler #uuid ".......")
;;       ; => {:count 2}

;; ------------------------------
;; More about `om.next/transact!`
;; ------------------------------

;; Components can run transactions, but so too can we submit transactions
;; directly to the reconciler:

;; (in-ns 'om-tutorial.core)
;; (om.next/transact! reconciler '[(increment)])


;; =============================================================================
;; Changing Queries Over Time
;; =============================================================================

;; With declarative queries, it's easy to change the behavior of an app. Borrowing
;; from Relay, Om Next supports query modification, but does so in a way that
;; doesn't compromise global time travel.

;; (7) Changing queries over time
(def app-state
  (atom
   {:app/title "Animals"
    :animals/list
    [[1 "Ant"] [2 "Antelope"] [3 "Bird"] [4 "Cat"] [5 "Dog"]
     [6 "Lion"] [7 "Mouse"] [8 "Monkey"] [9 "Snake"] [10 "Zebra"]]}))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :animals/list
  [{:keys [state] :as env} key {:keys [start end]}]
  {:value (subvec (:animals/list @state) start end)})

(defui AnimalsList
  static om/IQueryParams
  (params [this]
          {:start 0 :end 10})
  static om/IQuery
  (query [this]
         '[:app/title (:animals/list {:start ?start :end ?end})])
  Object
  (render [this]
          (let [{:keys [app/title animals/list]} (om/props this)]
            (dom/div nil
                     (dom/h2 nil title)
                     (apply dom/ul nil
                            (map
                             (fn [[i name]]
                               (dom/li nil (str i ". " name)))
                             list))))))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser (om/parser {:read read})}))

(om/add-root! reconciler
              AnimalsList (gdom/getElement "app"))

;; Here, most of this refactor is also familiar, but we've added some new ideas.
;; We changed our read function to a `multimethod`, this makes it easy to extend
;; cases in "an open ended" way.

;; We implement the `:animals/list` case, we finally use `params` (used when we
;; destructure `start` and `end`.

;; Finally, we have our component itself, the `AnimalsList` component.
;; The component defines `IQueryParams` and `IQuery`. The `params` method returns
;; a map of bindings. These will be used to replace any occurrences of `?some-var`
;; in the actual query.

;; (in-ns 'om-tutorial.core)
;; (om/get-query (om/class->any reconciler AnimalsList))
;; ; => [:app/title (:animals/list {:start 0, :end 10})]

;; Here, we see the params are boudn to the query directly.

;; -----------------
;; Change the Query!
;; -----------------

;; We can update our params via `om.next/set-query!`:

;; (in-ns 'om-tutorial.core)
;; (om/set-query!
;;   (om/class->any reconciler AnimalsList)
;;   {:params {:start 0 :end 5}})

;; -----------
;; The Indexer
;; -----------

;; Om Next supports a first class notion of "identity." Every reconciler has
;; an indexer, which keeps indexes to maintain a host of useful mappings.
;; For example, a class to all mounted components of that class, or prop name
;; and all components that use that prop name.
