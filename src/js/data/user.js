import { faker } from '@faker-js/faker';

const avatar = faker.image.avatar();
const name = faker.person.firstName();
const email = faker.internet.email();
const latitude = faker.location.latitude();
const longitude = faker.location.longitude();

const userProfile = {
    avatar,
    name,
    email,
    latitude,
    longitude
}


export default userProfile;