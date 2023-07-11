import { createSerializer as createKumaSerializer } from './kuma-serializer';
import { createSerializer as createEmotionSerializer } from '@emotion/jest';

export function setupEmotionTest() {
  expect.addSnapshotSerializer(createEmotionSerializer());
}

export function setupKumaTest() {
  expect.addSnapshotSerializer(createKumaSerializer());
}
