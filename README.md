# An Excel Spreadsheet importer demo with React on Rails

## Features

An simple full-stack upload importer app that enables user to upload .xls/.xlsx(.csv to be implemented) files and view the results

- Frontend: React + React Router + React Query + Axios
- Backend: Ruby on Rails
- UI lib: Material UI + Material Table

## Quick Start

```sh
$ git clone https://github.com/jacinyan/spreadsheet-importer-demo.git
$ cd spreadsheet-importer-demo/

# Install dependencies
$ bundle install && yarn install

# Database migration
$ rails db:create
$ rails db:migrate

# Run!
$ rails s [-p] [<PORT>]

Then open http://localhost:<PORT>
```

## TODD

- Implement CSV frontend logic
- Error handling
- Continuation on Test Cases
- Responsive layout
