import { MiddlewareObject } from "./MiddlewareObject.js";
import path from "path-browserify";
import pkg from 'express';

const { static: expressStatic } = pkg;

export const serveStatic = new MiddlewareObject(expressStatic(path.resolve('public')), true);