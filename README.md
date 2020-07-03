# Lerna Experiment

This is to see how lerna handles 3 project folders with with a consistent dependencies.

The most noticeable is `express` whic is being used by all 3.

You can specify specify dependencies for `packages` by doing:

```bash
yarn add cors -W --scope api;
# yarn add {dependency} -W --scope {package-directory}
# -W flag (or --ignore-workspace-root-check)
```

# Instructions

Will automatically install the dependencies in the root directory.

**0 - Install Dependencies**

```bash
yarn install;
```

**1 - Start All Services**

```bash
yarn start;
# lerna run start
# runs yarn start in each of the packages/*
```

# Packages

## api

[http://localhost:5000](http://localhost:5000)

Simple express API which serves just one endpoint.

## app

[http://localhost:3000](http://localhost:3000)

`create-react-app` example which does a fetch to the API to retrieve data.

## web

[http://localhost:2000](http://localhost:2000)

Express server that serves static html files and in it has a `<script>` which makes an fetch request to the API to retrieve data.
