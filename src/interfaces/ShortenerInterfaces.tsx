export interface Url {
    url: string
}

export interface Alias {
    alias: string
    _links: Links
}

export interface Links {
    self: string
    short: string
}
