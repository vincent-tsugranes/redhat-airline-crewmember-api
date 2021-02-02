import crewData from '../..//data/crewmembers.json';

export class Crewmember {
  id: number = 0;
  first_name: string = '';
  last_name: string = '';
  rating: string = '';
  base: string = '';
  img: string = '';

  random() {
    const randomElement =
      crewData.crewmembers[
        Math.floor(Math.random() * crewData.crewmembers.length)
      ];
    let crew: Crewmember = new Crewmember();
    crew.id = randomElement.id;
    crew.first_name = randomElement.first_name;
    crew.last_name = randomElement.last_name;
    crew.rating = randomElement.rating;
    crew.base = randomElement.base;
    return crew;
  }
}
