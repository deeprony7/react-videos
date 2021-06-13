import React from "react";
import { render, screen, fireEvent, cleanup, getByRole, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from "./App";
import VideoDetail from './VideoDetail'
import SearchBar from './SearchBar'

const searchResponse = {
  "data": {
      "kind": "youtube#searchListResponse",
      "etag": "mNtnUZeChiM1_hG-7KjYeTT4Z5s",
      "nextPageToken": "CAUQAA",
      "regionCode": "IN",
      "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 5
      },
      "items": [
          {
              "kind": "youtube#searchResult",
              "etag": "OPZX5vwuNFT2hCoMnbd9TEb45T0",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "YAdLFsTG70w"
              },
              "snippet": {
                  "publishedAt": "2019-10-04T14:49:26Z",
                  "channelId": "UCM-yUTYGmrNvKOCcAl21g3w",
                  "title": "5.1 Tree in data structure | Introduction to trees | Data structures",
                  "description": "Discussed the logical model of tree data structure in computer programming. I have discussed tree as a non-linear hierarchical data structure, tree terminologies ...",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/YAdLFsTG70w/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/YAdLFsTG70w/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/YAdLFsTG70w/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "Jenny's lectures CS/IT NET&JRF",
                  "liveBroadcastContent": "none",
                  "publishTime": "2019-10-04T14:49:26Z"
              }
          },
          {
              "kind": "youtube#searchResult",
              "etag": "J0XPw-LrEPUd2-fKvmNHtkgEX3o",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "QLFWCm1vlG4"
              },
              "snippet": {
                  "publishedAt": "2020-03-22T06:48:17Z",
                  "channelId": "UCjagdique_a5HkaNhy8mAcg",
                  "title": "TREES NAMES # PLANTS NAMES # Trees and Plants names in English# Different types of Trees and Plants",
                  "description": "TREES NAMES # PLANTS NAMES # Trees and Plants names in English# Different types of Trees and Plants. This videos are very useful for All Competitive, ...",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/QLFWCm1vlG4/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/QLFWCm1vlG4/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/QLFWCm1vlG4/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "KN Singh Teaching",
                  "liveBroadcastContent": "none",
                  "publishTime": "2020-03-22T06:48:17Z"
              }
          },
          {
              "kind": "youtube#searchResult",
              "etag": "XMa4K8BnLTJCc2ZOtNvzkG2RTAU",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "_0vaV8d0IqM"
              },
              "snippet": {
                  "publishedAt": "2020-03-26T00:15:00Z",
                  "channelId": "UCDTeCWl-l9_6HPwG5ryckkQ",
                  "title": "HOW TO GROW A LEMON TREE || REGROWING HACKS FOR YOUR PLANTS!",
                  "description": "GIVE YOUR PLANTS A SECOND LIFE We showed useful hacks for your inner gardener in this video! After watching this video you'll know how to create a mini ...",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/_0vaV8d0IqM/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/_0vaV8d0IqM/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/_0vaV8d0IqM/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "5-Minute DECOR",
                  "liveBroadcastContent": "none",
                  "publishTime": "2020-03-26T00:15:00Z"
              }
          },
          {
              "kind": "youtube#searchResult",
              "etag": "jJ0is1LtwjZOxx2tH83aXVTv5Tc",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "9WJliNDkXco"
              },
              "snippet": {
                  "publishedAt": "2018-09-20T19:00:01Z",
                  "channelId": "UCbAlVnKhbGLK78GsSemQXxw",
                  "title": "Top 5 BIGGEST Trees on Earth",
                  "description": "Mother nature has gone berserk! Today's upload is on the top five biggest trees on Earth. Some of these trees are also the oldest in the world. I hope you all ...",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/9WJliNDkXco/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/9WJliNDkXco/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/9WJliNDkXco/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "Top Fives",
                  "liveBroadcastContent": "none",
                  "publishTime": "2018-09-20T19:00:01Z"
              }
          },
          {
              "kind": "youtube#searchResult",
              "etag": "nwt8wg2TtphKrMZ7OY06dxD2EG4",
              "id": {
                  "kind": "youtube#video",
                  "videoId": "l4aSWSY_Oqo"
              },
              "snippet": {
                  "publishedAt": "2019-09-14T14:31:35Z",
                  "channelId": "UClcBy3wOSkUJTHg603fiwBg",
                  "title": "पौधों और पेड़ों का नाम || Name of plants and trees || Trees name || Easy english learning process",
                  "description": "Easy english learning process Name of plants and trees पौधों और पेड़ों का नाम Neem Jack fruit tree Sacred fig tree Date palm tree Acacia Holy basil ...",
                  "thumbnails": {
                      "default": {
                          "url": "https://i.ytimg.com/vi/l4aSWSY_Oqo/default.jpg",
                          "width": 120,
                          "height": 90
                      },
                      "medium": {
                          "url": "https://i.ytimg.com/vi/l4aSWSY_Oqo/mqdefault.jpg",
                          "width": 320,
                          "height": 180
                      },
                      "high": {
                          "url": "https://i.ytimg.com/vi/l4aSWSY_Oqo/hqdefault.jpg",
                          "width": 480,
                          "height": 360
                      }
                  },
                  "channelTitle": "Easy english learning process",
                  "liveBroadcastContent": "none",
                  "publishTime": "2019-09-14T14:31:35Z"
              }
          }
      ]
  },
  "status": 200,
  "statusText": "",
  "headers": {
      "cache-control": "private",
      "content-encoding": "gzip",
      "content-length": "1607",
      "content-type": "application/json; charset=UTF-8",
      "date": "Sun, 13 Jun 2021 18:49:18 GMT",
      "server": "scaffolding on HTTPServer2",
      "vary": "Origin, X-Origin, Referer"
  },
  "config": {
      "url": "/search",
      "method": "get",
      "headers": {
          "Accept": "application/json, text/plain, */*"
      },
      "params": {
          "part": "snippet",
          "type": "video",
          "maxResults": 5,
          "q": "trees"
      },
      "baseURL": "https://www.googleapis.com/youtube/v3",
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1
  },
  "request": {}
}

const server = setupServer(
    rest.get('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {
      return res(
        ctx.json(searchResponse.data)
        )
    }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`)
    return res(
      ctx.status(500),
      ctx.json({error: "Please add request handler"})
      )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test("search", async () => {

  render(<App />);

  expect(screen.getByText(/^video search$/i)).toBeInTheDocument()

  const searchBox = screen.getByTestId('search-box')
  fireEvent.change(searchBox, { target: { value: 'trees' }});
  expect(searchBox.value).toBe("trees")
  


  await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('Tree in data structure')


});
