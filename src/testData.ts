import Meetup from "./models/Meetup"

export const meetupList: Meetup[] = [
    {
        "name": "Grillkorvsfest",
        "description": "käka korv",
        "genre": "Mat",
        "location": "Göteborg",
        "date": "24 februari",
        "time": "19:00",
        "maxGuests": 4,
        "organiserId": "test",
        "id": "testar1",
        "comments": [],
        "points": [{"point":4, "userId":"test"}, {"point":3, "userId":"test3"}, {"point":5, "userId":"test2"}],
        "guestList": []

    },
    {
        "name": "Barnkalas",
        "description": "Fiskedamm",
        "genre": "Fest",
        "location": "Kramfors",
        "date": "12 Mars",
        "time": "12:00",
        "maxGuests": 8,
        "organiserId": "test",
        "id": "testar2",
        "comments": [],
        "points": [],
        "guestList": []
    },
    {
        "name": "Simskola",
        "description": "Lär dig simma",
        "genre": "Bad",
        "location": "Umeå",
        "date": "14 April",
        "time": "12:00",
        "maxGuests": 16,
        "organiserId": "test",
        "id": "testar3",
        "comments": [],
        "points": [],
        "guestList": []
    },
    {
        "name": "Sagostund",
        "description": "Vi läser en bok",
        "genre": "Litteratur",
        "location": "Uppsala",
        "date": "1 juni",
        "time": "09:00",
        "maxGuests": 7,
        "organiserId": "test",
        "id": "testar4",
        "comments": [],
        "points": [],
        "guestList": []
    },
    {
        "name": "Bowlingtävling",
        "description": "Vem vinner?",
        "genre": "Sport",
        "location": "Malmö",
        "date": "2 Augusti",
        "time": "17:00",
        "maxGuests": 8,
        "organiserId": "test",
        "id": "testar5",
        "comments": [],
        "points": [],
        "guestList": []
    },
]