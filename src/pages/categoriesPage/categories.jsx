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
} from "../../assets/Sharreit-Icons";

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
    "Photography ",
  ],

  [categories[1]]: [
    "Nanny",
    "Tutors",
    "Music Tutors",
    "Personal Trainer",
    "Personal Drivers",
    "Cleaners",
    "Loan Services",

  ],

  [categories[2]]: ["Season Tickets", "Subscription Services"],
};

export const icons = {
  [categories[0]]: [
    Books,
    PowerTools,
    MusicInstruments,
    Luggage,
    Luggage,
    Luggage,
    FarmingEquipments,
    FarmingEquipments,
    Apartments,
    Houses,
    Apartments,
  ],

  [categories[1]]: [
    Nanny,
    Lecturer,
    MusicTeacher,
    PersonalTrainer,
    Driver,
    Cleaner,
    LoanService
  ],

  [categories[2]]: [SeasonTickets, Lecturer],
};
