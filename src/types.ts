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
  dateIn: Date | null,
  dateOut: Date | null,
};

export type Track = {
  projectId: string,
  albumCode: string,
  title?: string | null,
  no: number,
};