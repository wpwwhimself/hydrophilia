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
  name: string | null,
  status: number,
  title: string | null,
  album: string | null,
  inspiredBy: string | null,
  dateIn: string | null,
  dateOut: string | null,
  no?: number | null,
};

export type Track = {
  projectId: string,
  no: number,
};