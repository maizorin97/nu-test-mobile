import { useState } from "react"
import { URL } from "../interfaces/ShortenerInterfaces"

export const useShortener = () => {

    const [url, setUrl] = useState<URL>()

    const postAlias = async () => {

        

    }

    return {
        url, setUrl
    }
}