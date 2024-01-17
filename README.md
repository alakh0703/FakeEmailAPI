# FakeEmail API

This is a simple backend project that provides a single endpoint to retrieve fake email data. The data consists of email messages in JSON format. You can use this API to simulate email data for testing or development purposes.

## Endpoint

### `/emails`


This endpoint returns a list of fake email messages in JSON format. Each email message includes the following fields:

- `id` (unique identifier)
- `from` (sender information, including a name and email)
- `subject` (email subject)
- `body` (email content)

Here's an example of the data structure returned by this endpoint:

```json
{
  "id": 1,
  "from": {
    "name": "Sarah Johnson",
    "email": "sarah.johnson@example.com"
  },
  "subject": "Exciting News!",
  "body": "Hi there,\n\nWe have some exciting news to share with you! Our new product line is now available. Explore our website to discover the latest collection and avail exclusive launch offers.\n\nHappy shopping!\n\nBest regards,\nSarah"
}
