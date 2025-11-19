# Math API Documentation

This API allows the client to calculate the power of a given base raised to a specified exponent. Additionally, clients can request the square root of the base as part of the response.

## Calculate Power
**Request Format:** `/math/power/:base/:exponent`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Calculates the result of raising a `base` number to an `exponent` power. Optionally, if a query parameter `root` is provided, the square root of the `base` will also be returned in the response.

**Example Request:** `/math/power/4/2`

**Example Response:**
```json
{
    "result": 16
}
```

**Example Request with Root:** `/math/power/9/2?root=true`

**Example Response with Root:**
```json
{
    "result": 81,
    "root": 3
}
```

**Error Handling:**
- Possible 400 (invalid request) errors (all in JSON):
  - If the `base` or `exponent` is not a valid number, returns an error with message `{"error": "Invalid base or exponent. Please provide numeric values."}`
- Possible 500 errors (all in JSON):
  - If something goes wrong on the server, returns error with `{"error": "Something went wrong; please try again."}`

## Notes:
- The `base` and `exponent` must be provided as part of the URL path.
- Both `base` and `exponent` are expected to be numeric. Non-numeric values will result in an error.
- The optional `root` query parameter does not require a value. Its presence in the request query indicates that the square root of the `base` should also be calculated and included in the response.

## Rectangle area and Permeter

**Example Request:** `/math/rectangle/:width/:height`

**Example Response:**
```json
{
    "area":25,
    "perimeter":20
}
```

**Error Handling:**
- Possible 400 (invalid request) errors (all in JSON):
  - If the `width` or `height` is not a valid number, returns an error with message `{"error": "Invalid width or height. Please provide numeric values."}`
- Possible 500 errors (all in JSON):
  - If something goes wrong on the server, returns error with `{"error": "Something went wrong; please try again."}`

## Notes:
- The `width` and `height` must be provided as part of the URL path.
- Both `width` and `height` are expected to be numeric. Non-numeric values will result in an error.

## Circle area and circumference

**Example Request with Root:** `/math/circle/:r`

**Example Response with Root:**
```json
{
    "area":3.14,
    "circumference":6.28
}

**Error Handling:**
- Possible 400 (invalid request) errors (all in JSON):
  - If the `r` is not a valid number, returns an error with message `{"error": "Invalid radius. Please provide numeric values."}`
- Possible 500 errors (all in JSON):
  - If something goes wrong on the server, returns error with `{"error": "Something went wrong; please try again."}`

## Notes:
- The `radius` must be provided as part of the URL path.
- `Radius` is expected to be numeric. Non-numeric values will result in an error.

