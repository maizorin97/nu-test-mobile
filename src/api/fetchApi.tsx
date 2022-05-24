const base_url = "https://url-shortener-nu.herokuapp.com"

const fetchApi = async <T extends Object = any>(
    method: "GET" | "POST" | "PATCH", url: string,
    data: any = undefined
): Promise<T | undefined> => {

    const request = new Request(base_url + url, {
        headers: {
            //"Authorization": `Bearer ${access_token}`,
            "Content-Type": 'application/json',
            "Accept": '*/*'
        },
        method: method,
        body: data
    });

    let status: "OK" | "ERROR" = "ERROR"

    const response = await fetch(request)
        .then((response) => {
            if (response.status > 199 && response.status < 300) {
                status = "OK"
            }
            try {
                return response.json() as Promise<T>
            } catch (error) {
                console.log("error json")
                return undefined
            }
        })
        .then((data) => {
            if (status === "OK") {
                return data
            }
            console.log(data)
            return undefined
        })
        .catch((error) => {
            console.log(`Error del fetch -> \n${error}`)
            return undefined
        })

    return response
}

export default fetchApi