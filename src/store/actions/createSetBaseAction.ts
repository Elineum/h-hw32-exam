import { createAction } from "@reduxjs/toolkit";

export default createAction<{ name: string }>("SET_BASE");
