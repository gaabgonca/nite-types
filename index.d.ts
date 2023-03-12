interface Ivent {
    id: string,
    name: string,
    description: string,
    starting_hour: Date,
    ending_hour: Date,
    address: String,
    latitude: number,
    longitude: number,
    cover: CloudStorageImage,
    main_category: number,
    categories: number[],
    virtual: boolean,
    min_age: number,
    max_age: number,
    capacity: number,
    owner_id: string,
    owner_name: string,
    localities: Locality[],
    starting_price: number,
    event_date: Date,
    followers: string[],
    short_address: string,
    images: CloudStorageImage[]
}

interface Locality {
    id: number,
    name: string,
    price: number,
    description?: string | null,
}

interface CloudStorageImage {
    url : string,
    path : string
}

export {Ivent, Locality, CloudStorageImage}