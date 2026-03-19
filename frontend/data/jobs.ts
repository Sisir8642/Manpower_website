export type Position = {
  id: string;
  title: string;
  vacancies: number;
};

export type JobLot = {
  lotNo: string;
  company: string;
  country: string;
  positions: Position[];
};

export type Newspaper = {
  id: string;
  image: string;
  lots: JobLot[];
};

export const newspapers: Newspaper[] = [
  {
    id: "1",
    image: "/newspaper.jpeg",
    lots: [
      {
        lotNo: "LOT-001",
        company: "Al Habib Company",
        country: "UAE",
        positions: [
          { id: "1", title: "Electrician", vacancies: 10 },
          { id: "2", title: "Plumber", vacancies: 8 },
        ],
      },
      {
        lotNo: "LOT-002",
        company: "Qatar Manpower",
        country: "Qatar",
        positions: [
          { id: "3", title: "Welder", vacancies: 12 },
          { id: "4", title: "Helper", vacancies: 20 },
        ],
      },
    ],
  },

  {
    id: "2",
    image: "/newspaper.jpeg",
    lots: [
      {
        lotNo: "LOT-003",
        company: "Dubai Group",
        country: "UAE",
        positions: [
          { id: "5", title: "Driver", vacancies: 6 },
        ],
      },
    ],
  },
];