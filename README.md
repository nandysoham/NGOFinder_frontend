# NGOFinder_frontend - Find NGOs in and around you
NGOFinder is a web application designed to connect users with non-governmental organizations (NGOs) aligned with their interests and values.

Here's what you'll find on NGOFinder:

1. Comprehensive NGO Database: Access a database of NGOs registered, ensuring accurate and reliable information.
2. Search & Filter NGOs: Easily discover NGOs based on location to find the perfect organization to support.
3. Detailed NGO Profiles: Dive deeper with comprehensive NGO profiles showcasing their mission, activities, contact details, and registration information.
4. Stay Informed: Get the latest news, events, and campaigns from NGOs you care about, so you can stay engaged and make a difference.
5. The NGOFinder blog is your one-stop shop for insightful content related to social impact, volunteering, and the incredible work of NGOs around the world.


## Execution 

### Find the backend server
1. [Docker](https://hub.docker.com/repository/docker/nandysoham/ngofinder_backend/general)
2. [Github](https://github.com/nandysoham/NGOFinder_backend)

### Running a docker image
```
docker pull nandysoham/ngofinder_frontend:latest
docker run --name nandysoham_c --env-file ./frontend.env --rm  -p 3000:3000  nandysoham/ngofinder_frontend
```

Details of `frontend.env` file
``` frontend.env
REACT_APP_BACKEND_URL=
REACT_APP_MAPBOX_TOKEN=
```
|Params|Description| Reference|
|REACT_APP_BACKEND_URL| Url of the backend| eg: http://localhost:2000|
|REACT_APP_MAPBOX_TOKEN| Mapbox token for Showcasing Maps| [Ref](https://docs.mapbox.com/help/glossary/access-token/)|

### Building from scratch
```
git clone
cd /path/to/repository
yarn install
// Run the backend servers
npm start
```

### Running tests
```
// Add tests in src/__tests__ folder
npm run test
```
