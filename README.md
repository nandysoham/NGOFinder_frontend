# NGOFinder_frontend - Find NGOs in and around you
NGOFinder is a web application designed to connect users with non-governmental organizations (NGOs) aligned with their interests and values.

Here's what you'll find on NGOFinder:

1. Comprehensive NGO Database: Access a database of NGOs registered, ensuring accurate and reliable information.
2. Search & Filter NGOs: Easily discover NGOs based on location to find the perfect organization to support.
3. Detailed NGO Profiles: Dive deeper with comprehensive NGO profiles showcasing their mission, activities, contact details, and registration information.
4. Stay Informed: Get the latest news, events, and campaigns from NGOs you care about, so you can stay engaged and make a difference.
5. The NGOFinder blog is your one-stop shop for insightful content related to social impact, volunteering, and the incredible work of NGOs around the world.


## Execution 
### Docker Image for frontend
  [Docker](https://hub.docker.com/repository/docker/nandysoham/ngofinder_frontend/general)
  
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
|---|---|---|
|REACT_APP_BACKEND_URL| Url of the backend| eg: http://localhost:2000|
|REACT_APP_MAPBOX_TOKEN| Mapbox token for Showcasing Maps| [Ref](https://docs.mapbox.com/help/glossary/access-token/)|

### Building from scratch
```
git clone git@github.com:nandysoham/NGOFinder_frontend.git
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

# Salient Fetaures
### Landing Page
![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/4f74bef6-1d00-4098-95ee-fdcb36af6b4d)

### User/ NGO Dashboard Management
![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/050f377e-92c5-43e1-ac4b-0aec679beca2)
User SignUp page

![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/501fd535-3179-42e0-9a74-ebfe1535335d)
User Dashboard

![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/f71d1202-38d6-4aa0-b81c-e8d050503785)
Changing user details

![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/92443f94-79b9-4280-9468-2160e49da007)
List of NGOs nearby

### Blogs
![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/244148f0-afce-466a-be55-7cfd48a90ea5)
Writing a blog - custom support for images, embedded videos and other assets

![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/3b303843-ddcd-4dd8-96e9-260e5a5991ef)
List of blogs

![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/614b48ad-034d-4f60-9798-9502b95ca126)
An individual blog

![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/91c9ab13-b588-48c0-9f99-70e77fea9a7f)
Embedded assets and a dedicated comment section

### NGO section
![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/aa042fd4-1fc7-4233-909f-5a6bfcb17861)
Dashboard for an NGO - process remains same as that of an individual- however fields vary

### Notification
![image](https://github.com/nandysoham/NGOFinder_frontend/assets/67374926/2a1d3493-4352-4b43-a50f-70545c3622f7)
Notification for subscribers













