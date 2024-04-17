import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const{manufacturer, year, model, limit, fuel} = filters;
    const headers = {
            'X-RapidAPI-Key': '698b383fbamsh5c902b2b2fa0014p1133a9jsn2152e345240e',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers: headers,
    });

    const result = await response.json();
    return result; 
}

export const calculateCarRent= (city_mpg: number, year:
    number) => {
        const basePricePerDay = 75;
        const mileageFactor =  12;
        const ageFactor = 10;

        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
        return rentalRatePerDay.toFixed(0);
    };
    
    export const generateCarImageUrl = (car: CarProps, angle?: string) => {
        const url = new URL("https://cdn.imagin.studio/getimage");
        const { make, model, year } = car;
      
        url.searchParams.append('customer', 'hrjavascript-mastery');
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(" ")[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        // url.searchParams.append('zoomLevel', zoomLevel);
        url.searchParams.append('angle', `${angle}`);
      
        return `${url}`;
      } 
      export const updateSearchParams = (type: string, value: string) => {
      const searchParams = new URLSearchParams(window.location.search);


        searchParams.set(type, value)

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      return newPathname;
      }