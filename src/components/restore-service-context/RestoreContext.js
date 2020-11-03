import {createContext} from 'react'


const {
    Provider:RestoreProvider ,
    Consumer: RestoreConsumer
} = createContext()

export {
    RestoreConsumer,
    RestoreProvider
}