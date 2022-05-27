import { useState } from "react"
import fetchApi from "../api/fetchApi"
import { Alias, Url } from "../interfaces/ShortenerInterfaces"

export const useShortener = () => {

    const [recentAlias, setRecentAlias] = useState<Alias[]>([])
    const [loading, setLoading] = useState(false)

    const postAliasApi = async (body: Url) => {

        setLoading(true)

        const data = await fetchApi<Alias>("POST", "/api/alias", JSON.stringify(body))

        if (data != undefined) {
            setRecentAlias([data, ...recentAlias])
            console.log(recentAlias)
        }

        setLoading(false)

    }

    return {
        recentAlias,
        postAliasApi,
        loading
    }
}