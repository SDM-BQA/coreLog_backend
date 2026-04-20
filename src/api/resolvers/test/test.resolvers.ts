const catData = [
    {
        _id: "1",
        name: "Whiskers",
        age: 2,
        breed: "Siamese",
        owner: {
            _id: "3",
            first_name: "Charlie",
            mobile_no: "1122334455",
            profile_pic: "charlie.jpg",
        },
    },
    {
        _id: "2",
        name: "Mittens",
        age: 4,
        breed: "Persian",
        owner: {
            _id: "4",
            first_name: " Diana",
            mobile_no: "5566778899",
            profile_pic: "diana.jpg",
        },
    },
];

const dogData = [
    {
        _id: "1",
        name: "Buddy",
        age: 3,
        breed: "Golden Retriever",
        owner: {
            _id: "1",
            first_name: "Alice",
            mobile_no: "1234567890",
            profile_pic: "alice.jpg",
        },
    },
    {
        _id: "2",
        name: "Max",
        age: 5,
        breed: "Labrador",
        owner: {
            _id: "2",
            first_name: "Bob",
            mobile_no: "0987654321",
            profile_pic: "bob.jpg",
        },
    },
];

export const test_resolver = {
    Query: {
        getAllDogs: () => dogData,
        getAllCats: () => catData,
        // @ts-ignore
        getDogById: (_, { _id }) => dogData.find((dog) => dog._id === _id),
        // @ts-ignore
        getCatById: (_, { _id }) => catData.find((cat) => cat._id === _id),
    },
    Mutation: {
        // @ts-ignore
        updateDogBreed: (_, { input }) => {
            const dog = dogData.find((d) => d._id === input._id);
            if (dog) {
                dog.breed = input.breed;
                return dog;
            }
            throw new Error("Dog not found");
        },
        // @ts-ignore
        updateCatBreed: (_, { input }) => {
            const cat = catData.find((c) => c._id === input._id);
            if (cat) {
                cat.breed = input.breed;
                return cat;
            }
            throw new Error("Cat not found");
        },
    },
}
