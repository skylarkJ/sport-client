## An Embedded Screenshot Of The App
Highlights:
![highlights](https://raw.githubusercontent.com/skylarkJ/sport-client/feature/public/highlights.png "Highlights")

Wireframes:
![wireframe-sport](https://raw.githubusercontent.com/skylarkJ/sport-client/feature/public/wireframe-sport.png "Wireframes")

## Explanations Of The Technologies Used
I have used javascript front end framework Ember.js while Ruby on Rails on the back end.
YouTube highlights are rendered in the browser through a controller in the backend and route -
making queries to YouTube APIs.

## A Couple Paragraphs About The General Approach I Took
I have picked to build an application that would solve the inconvinient jumping of sport fans of any kinds from one application to another to catch up on sport highlights in their busy lives.
Now with the mind of 4 days to complete a project I decided to go with
highlights for just NHL teams. There are 30 teams available and all highligts accessible
from YouTube APIs. The search is sorted from the top to bottom according to the latest upload. In the future I would like to store third party APIs from several sources for several team sports.

At first I created user stories and split them to see which needs to be fullfill to meet requirements and what can wait until more time. Then I created wireframe to get more sence about the layout and a user flow. After that I broke it into several tasks and used trello to track the workflow.

I have two models - user and favorite. I have several attributes for favorite.
### snippet of model - favorite.js
`
export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  video_id: DS.attr('string'),
  image: DS.attr('string')
});
`

I created:
components favorite, highlight and search
route for favorites
template components: favorite, highlight, search, index

## Installation Instructions For Any Dependencies
npm

replace all dependent package versions in package.json with a glob (*).
rm -r node_modules.
npm update --save.
npm update --save-dev.
npm install
bower

Currently bower cannot automatically save updated versions to bower.json.

rm -r bower_components
bower update
bower list
Take the new version numbers from the top level of the list and paste them into bower.json
bower install
ember test

## Installation In General

Downloaded from this [ember-template](https://github.com/skylarkJ/ember-template).
Unzipped and renamed the template directory.
Emptied README.md and filled with my own content.
Moved into the new project and git init.
Replaced all instances of 'ga-wdi-boston.ember-template' with your app name. This included package.json, bower.json, app/index.html, tests/index.html, and config/environment.js, possibly others.
Installed dependencies with npm install and bower install.
Ran the development server with ember server. Use the --proxy flag to avoid writing development-specific CORS and CSP settings.

### Tasks To Run During Developments
grunt nag or just grunt: runs code quality analysis tools on your code and complains
grunt reformat: reformats all your code in a standard style
ember server: generates bundles, watches, and livereloads (use the --proxy flag when developing locally)
ember test: runs any automated tests
ember build: prepare a distribution for deployment (use the --environment flag if you've customized builds)
ember generate: make use of the many generators for code (try ember help generate for more details)


## Link To My User Stories
[5 User Stories](https://www.evernote.com/l/AUCS4safzslABoAwJb6duONcc8rbzzvRsaw)

## Link To My Wireframes
Wireframes:
![wireframe-sport](https://raw.githubusercontent.com/skylarkJ/sport-client/feature/public/wireframe-sport.png "Wireframes")

## Link To Your Pitch Deck – Documentation Of Your Wireframes, User Stories, And Proposed Architecture
[my pitch deck for JUST HIGHLIGHTS](https://docs.google.com/presentation/d/1CRXbgFHTlAKbT8JktzDg_p8uQ-_ymQN-vpW0kXDPWaU/edit?usp=sharing)


## Descriptions Of Any Unsolved Problems Or Major Hurdles You Had To Overcome

I had a major hurdle with this snippet bellow. Specificaly with the publishedAt. YouTube has almost no examples of how their APIs can be accessed. The JSON data is available but I was forgetting the .data.

`app/components/component-highlight snippet of actions:`

```
actions: {
  addToFavorites (highlight) {
    this.get('store').createRecord('favorite', {
      title: highlight.snippet.data.title,
      date: highlight.snippet.data.publishedAt,
      video_id: highlight.id,
      image: highlight.snippet.data.thumbnails.default.url
    })
    .save()
    .then(() => {
      this.set('isHidden', true);
      this.get('flashMessages').success('Added Highlight to Favorites!');
    })
    .catch(() => {
      this.get('flashMessages').danger('Failed To Add To Favorites. Please Try again!');
    });
  },
}
```

### YouTube APIs Rendering from JSON
#### JSON Structure Showing The Format Of A Videos Resource:
[YouTube v3 Data API Video Resources](https://developers.google.com/youtube/v3/docs/videos#resource)
