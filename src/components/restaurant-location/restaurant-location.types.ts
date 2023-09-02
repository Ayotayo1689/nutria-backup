export interface IRestaurantLocationProps {
  business_status: string;
  geometry: IGeometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: IOpeningHours;
  place_id: string;
  plus_code: IPlusCode;
  photos:any 
  reference: string;
  types: string[];
  vicinity: string;
  rating: number
}

interface ILocation {
  lat: number;
  lng: number;
}

interface IOpeningHours {
  open_now: boolean;
}

interface IPlusCode {
  compound_code: string;
  global_code: string;
}

interface IGeometry {
  location: ILocation;
  viewport: {
    northeast: ILocation;
    southwest: ILocation;
  };
}
