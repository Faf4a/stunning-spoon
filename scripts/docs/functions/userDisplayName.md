---
title: $userDisplayName
description: $userDisplayName will return the display name of a given user.
id: userDisplayName
---

`$userDisplayName` will return the display name of a given user.

## Usage

```aoi
$userDisplayName[userID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user.  |  false   |

## Example(s)

This will return your display name, if you have none, it'll return your Discord username:

```javascript
client.command({
    name: "userDisplayName",
    code: `
  $userDisplayName[$authorID]
  `
});
```
