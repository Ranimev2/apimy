
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "title": "ManaxuAPIs",
      "description": "Free Rest API",
      "version": "1.0.0",
      "x-logo": {
        "url": "https://telegra.ph/file/4db35e1d30e8d503918d8.jpg",
        "altText": "ManaxuAPIs"
      }
    },
    "servers": [
      {
        "url": "https://api-takamiyanime.vercel.app"
      }
    ],
    "tags": [
      {
        "name": "AI",
        "description": "API endpoints for artificial intelligence content from various platforms."
      },
      {
        "name": "Cek Resi",
        "description": "API endpoints for check receipts content from various platforms."
      }
    ],
    "paths": {
      "/api/ai/luminai": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with Lumin AI",
          "parameters": [
            {
              "in": "query",
              "name": "query",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            },
            {
              "in": "query",
              "name": "username",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/gpt4": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with GPT4",
          "parameters": [
            {
              "in": "query",
              "name": "system",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            },
            {
              "in": "query",
              "name": "assistant",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            },
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/leptonai": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with LeptonAi",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/letmegpt": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with LetmeGPT",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/thinkany": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with Thinkany",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/isouchat": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with IsouChat",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/yousearch": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with YouSearch",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/aoyo": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with Aoyo",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/llama3": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with Llama3",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/ai/gpt4o": {
        "get": {
          "tags": [
            "AI"
          ],
          "summary": "Chat with GPT4o",
          "parameters": [
            {
              "in": "query",
              "name": "prompt",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/cekresi/jnt": {
        "get": {
          "tags": [
            "Cek Resi"
          ],
          "summary": "Check JNT Receipt",
          "parameters": [
            {
              "in": "query",
              "name": "query",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "Please input Query!"
            }
          ],
          "responses": {
            "200": {
              "description": "Result successfully returned",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "boolean",
                        "example": true
                      },
                      "developer": {
                        "type": "string",
                        "example": "MannR."
                      },
                      "result": {
                        "type": "string",
                        "example": "data"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "x-request-time": "2024-08-15T00:30:45.858Z"
  },
  "customOptions": {
    "displayRequestDuration": true
  }
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
