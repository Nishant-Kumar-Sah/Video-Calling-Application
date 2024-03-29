import React, { useMemo } from "react";
import { io } from "socket.io-client"

const SocketContext = React.createContext(null)

export const useSocket = () => {
        return React.useContext(SocketContext)
}


export const SocketProvider = ( props) => {
        const socket = useMemo(() => io ({
                host : "localhost",
                port: 8001,
        }), [])
        return  (
                <SocketContext.Provider value={}>
                        {props.children}

                </SocketContext.Provider>
        )
}

