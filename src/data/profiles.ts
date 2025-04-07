export type Hobby = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  age: number;
  tagline: string;
  location: string;
  avatar: string;
  description: string;
  hobbies: Hobby[];
};

export const profiles: Profile[] = [
  {
    "name": "Jane Doe",
    "age": 25,
    "tagline": "Adventure and photographer",
    "location": "Los Angeles",
    "avatar": "https://i.pravatar.cc/150?img=47",
    "description": "Creative thinker with a love for outdoor adventures",
    "hobbies": [
      {
        "title": "Hiking",
        "description": "Enjoy exploring trails and mountains hills"
      },
      {
        "title": "Photography",
        "description": "Passionate about capturing moments"
      }
    ]
  },
  {
    "name": "John Smith",
    "age": 30,
    "tagline": "Chef and globetrotter",
    "location": "New York",
    "avatar": "https://i.pravatar.cc/150?img=48",
    "description": "Passionate about culinary arts cultures",
    "hobbies": [
      {
        "title": "Cooking",
        "description": "Love experimenting with new recipes"
      },
      {
        "title": "Travel",
        "description": "Always ready to explore new places"
      }
    ]
  },
  {
    "name": "Alice Johnson",
    "age": 28,
    "tagline": "Book lover and gardener",
    "location": "Chicago",
    "avatar": "https://i.pravatar.cc/150?img=49",
    "description": "Dedicated to continuous learning",
    "hobbies": [
      {
        "title": "Reading",
        "description": "Avid reader of fiction and non-fiction"
      },
      {
        "title": "Gardening",
        "description": "Find joy in cultivating plants and flowers"
      }
    ]
  }
]; 