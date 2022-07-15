# :dog: Pups 'N Stuff Crud API

### To Run Locally:

- Clone (or fork and clone) Repo
- `npm install`
- `createdb pupsNstuff`
- To seed db run -> `npm run seed`
- To start server run -> `npm run server:dev`

    <h3>Endpoints:</h3>

    <hr />
    <h3>puppies</h3>
    <section class="puppies">
      <div>
        <h4>GET /api/puppies</h4>
        <div class="description">
          <h5>Sample Return</h5>
          <pre class="code">
            <code>
            [
              {
                "id": 1,
                "name": "Sir Waggington",
                "email": "sir-wag@email.com",
                "isCute": true,
                "age": 5,
                "ownerId": 1,
                "tricks": [
                  {
                    "id": 2,
                    "title": "Lay Down"
                  },
                  {
                    "id": 3,
                    "title": "Jump through flaming hoop"
                  }
                ]
              },
              {
                "id": 2,
                "name": "Fiona Penny Pickles",
                "email": "pick-your-pennies@email.com",
                "isCute": true,
                "age": 6,
                "ownerId": 1,
                "tricks": []
              },
              {
                "id": 3,
                "name": "Professor Wagglesworth",
                "email": "waggie@email.com",
                "isCute": true,
                "age": 6,
                "ownerId": 2,
                "tricks": [
                  {
                    "id": 1,
                    "title": "Sit"
                  }
                ]
              },
              {
                "id": 4,
                "name": "Sergeant Barkowitz",
                "email": "the-sarge@email.com",
                "isCute": true,
                "age": 4,
                "ownerId": 2,
                "tricks": [
                  {
                    "id": 2,
                    "title": "Lay Down"
                  }
                ]
              },
              {
                "id": 5,
                "name": "Captain Sniffer",
                "email": "capn-sniff@email.com",
                "isCute": true,
                "age": 7,
                "ownerId": 3,
                "tricks": []
              },
              {
                "id": 6,
                "name": "Miss Furbulous",
                "email": "miss-furby@email.com",
                "isCute": true,
                "age": 1,
                "ownerId": 3,
                "tricks": []
              },
              {
                "id": 7,
                "name": "Alfred von Wigglebottom",
                "email": "alfie@email.com",
                "isCute": true,
                "age": 2,
                "ownerId": 3,
                "tricks": []
              }
          ]
          </code></pre>
        </div>
      </div>
      <div>
        <h4>GET /api/puppies/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must send id in url parameter
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code">
            <code>
              {
                "id": 1,
                "name": "Sir Waggington",
                "email": "sir-wag@email.com",
                "isCute": true,
                "age": 5,
                "ownerId": 1,
                "tricks": [
                  {
                    "id": 2,
                    "title": "Lay Down"
                  },
                  {
                    "id": 3,
                    "title": "Jump through flaming hoop"
                  }
                ]
              }
            </code>
          </pre>
        </div>
      </div>
      <div>
        <h4>POST /api/puppies</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            {
              "name": "new name",
              "email": "test@mail.com",
              // optional
              "isCute": true,
              // optional
              "ownerId": 1
            }
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 8,
              "name": "new name",
              "email": "test@mail.com",
              "isCute": true,
              "age": null,
              "ownerId": 1
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>PATCH /api/puppies/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // CANNOT UPDATE isCute or ownerId
            {
              "name": "new patched name"
            }
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 1,
              "name": "new patched name",
              "email": "test4@mail.com",
              "isCute": true,
              "age": 5,
              "ownerId": 1
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>DELETE /api/puppies/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must send id in url parameter
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 6,
              "name": "Miss Furbulous",
              "email": "miss-furby@email.com",
              "isCute": true,
              "age": 1,
              "ownerId": 3
            }
          </code></pre>
        </div>
      </div>
    </section>
    <hr />
    <h3>owners</h3>
    <section class="owners">
      <div>
        <h4>GET /api/owners</h4>
        <div class="description">
          <h5>Sample Return</h5>
          <pre class="code"><code>
            [
              {
                "id": 1,
                "name": "Maureen Biologist"
              },
              {
                "id": 2,
                "name": "Teri Dactyl"
              },
              {
                "id": 3,
                "name": "Aida Bug"
              }
          ]
          </code></pre>
        </div>
      </div>
      <div>
        <h4>GET /api/owners/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must send id in url parameter
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 1,
              "name": "Maureen Biologist"
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>POST /api/owners</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            {
              "name": "some new user's name"
            }
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 5,
              "name": "some new user's name"
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>PATCH /api/owners/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must send id in url parameter
            {
              "name": "some new name"
            }
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            [
              {
                "id": 1,
                "name": "some new name"
              }
          ]
          </code></pre>
        </div>
      </div>

      <div>
        <h4>DELETE /api/owners/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must send id in url parameter
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            // returns the deleted resource
            {
              "id": 4,
              "name": "some new name"
            }
          </code></pre>
        </div>
      </div>

    </section>
    <hr />
    <h3>tricks</h3>
    <section class="tricks">
      <div>
        <h4>GET /api/tricks</h4>
        <div class="description">
          <h5>Sample Return</h5>
          <pre class="code"><code>
            [
              {
                "id": 1,
                "title": "Sit"
              },
              {
                "id": 2,
                "title": "Lay Down"
              },
              {
                "id": 3,
                "title": "Jump through flaming hoop"
              },
              {
                "id": 4,
                "title": "ride motorcycle"
              }
          ]
          </code></pre>
        </div>
      </div>
      <div>
        <h4>GET /api/tricks/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must pass id in url parameter
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 1,
              "title": "Sit"
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>POST /api/tricks</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            {
              "title": "Tight Rope Walking"
            }
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 5,
              "title": "Tight Rope Walking"
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>PATCH /api/tricks/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must pass id in url parameter
            {
              "title": "a new title"
            }
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            {
              "id": 1,
              "title": "a new title"
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>DELETE /api/tricks/:id</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must pass id in url parameter
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            // returns the deleted resource
            {
              "id": 1,
              "title": "a new title"
            }
          </code></pre>
        </div>
      </div>
    </section>
    <hr />
    <h3>puppies_tricks</h3>
    <section class="puppies_tricks">
      <div>
        <h4>POST /api/puppies_tricks/:puppyId/:trickId</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must pass puppyId and trickId in url parameters
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            // returns the thru table data
            {
              "id": 4,
              "puppy_id": 1,
              "trick_id": 2
            }
          </code></pre>
        </div>
      </div>
      <div>
        <h4>DELETE /api/puppies_tricks/:puppyId/:trickId</h4>
        <div class="description">
          <h5>Request Body:</h5>
          <pre class="code"><code>
            // Must pass puppyId and trickId in url parameters
          </code></pre>
          <h5>Sample Return</h5>
          <pre class="code"><code>
            // returns the deleted resource
            {
              "id": 4,
              "puppy_id": 1,
              "trick_id": 2
            }
          </code></pre>
        </div>
      </div>
    </section>
    <hr />
    <footer>
      <h2>Happy Coding! Arf Arf!</h2>
    </footer>
