export type Album = {
  code: string,
  name: string,
  group: string,
  years: string,
  desc: string,
  color: string,
};

export type Project = {
  id: string,
  name?: string,
  status: number,
  title?: string,
  album?: string,
  inspiredBy?: string,
  dataIn: Date,
  dataOut?: Date,
};