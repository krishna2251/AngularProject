import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[]=[
    {
        "id" :1,
        "name": "Madhapur",
        "date": new Date('17/09/2019'),
        "distance": 10.3,
        "comments" : "Nice Place ",
        "gpxData" :'../../assets/gpx/1.gpx'
    },

    {
        "id" :2,
        "name": "Narsingi",
        "date": new Date('17/09/2019'),
        "distance": 13.3,
        "comments" : "Nice Place ",
        "gpxData" :'../../assets/gpx/2.gpx'
    },
    {
        "id" :3,
        "name": "Hitec city",
        "date": new Date('17/09/2019'),
        "distance": 1.3,
        "comments" : "Nice Place ",
        "gpxData" :'../../assets/gpx/3.gpx'
    },
    {
        "id" :4,
        "name": "Ameepet",
        "date": new Date('17/09/2019'),
        "distance": 13.3,
        "comments" : "Nice Place ",
        "gpxData" :'../../assets/gpx/4.gpx'
    },
]