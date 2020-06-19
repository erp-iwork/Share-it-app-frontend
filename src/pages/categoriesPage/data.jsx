import {
  Apartments,
  Books,
  Cleaner,
  Driver,
  FarmingEquipments,
  Houses,
  Luggage,
  Nanny,
  MusicTeacher,
  MusicInstruments,
  PowerTools,
  PersonalTrainer,
  LoanService,
  SeasonTickets,
  Lecturer,
} from "../../../assets/Sharreit-Icons";
export const categories = [
  "Product Sharing",
  "Services Sharing",
  "Digital Sharing",
];

export const subCategories = {
  [categories[0]]: [
    "Textbooks",
    "Power Tools",
    "Music Instruments",
    "Luggage",
    "Camping Gear",
    "Construction Equipments",
    "Farming Equipments",
    "Ladder",
    "Office Space",
    "Storage Space",
    "Photography / Videography",
  ],

  [categories[1]]: [
    "Nanny",
    "Tutors",
    "Music Tutors",
    "Personal Trainer",
    "Personal Drivers",
    "Cleaners",
  ],

  [categories[2]]: ["Season Tickets", "Subscription Services"],
};

export const icons = {
  [categories[0]]: [
    Apartments,
    Books,
    FarmingEquipments,
    Houses,
    Luggage,
    MusicInstruments,
    PowerTools,
    P7,
    P8,
    P9,
    P10,
  ],

  [categories[1]]: [
    Cleaner,
    Driver,
    Nanny,
    MusicTeacher,
    PersonalTrainer,
    LoanService,
    Lecturer,
  ],

  [categories[2]]: [SeasonTickets, D1],
};
