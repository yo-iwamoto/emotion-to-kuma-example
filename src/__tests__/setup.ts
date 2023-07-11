import { createSerializer } from './kuma-serializer';

export function setup() {
  expect.addSnapshotSerializer(createSerializer());
}
