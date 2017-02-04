process.env.DEBUG = false
process.env.NODE_ENV = 'test'
// This file ensures JSDOM is loaded before React is included
import 'helpers/cssModulesHook'
import 'helpers/globalJSDOM'
import nodeHookFilename from 'node-hook-filename'

nodeHookFilename([ '.jpeg' ])
