'use strict'

import { createStore, applyMiddleWare } from 'redux'
import logger from 'redux-logger'

//create a store passing reducers as an argument
const store = createStore(reducers)


//ACTIONS
