import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { CATEGORIES_DATA, catalogCategoryForSlug } from './categories.ts';
import { PRODUCTS } from './products.ts';

test('every category link opens a named catalog filter', () => {
  for (const category of CATEGORIES_DATA) {
    assert.notEqual(catalogCategoryForSlug(category.slug), '');
  }
  assert.equal(catalogCategoryForSlug('alat-teknik'), 'Alat teknik');
  assert.equal(catalogCategoryForSlug('cat'), 'Cat');
  assert.equal(catalogCategoryForSlug('kunci-pintu'), 'Kunci Pintu & Aksesoris Mebel');
  assert.equal(catalogCategoryForSlug('unknown'), 'Semua');
});

test('catalog and category image paths exist locally', () => {
  for (const item of CATEGORIES_DATA) {
    assert.ok(item.image.startsWith('/'), item.image);
    assert.ok(existsSync(join(process.cwd(), 'public', item.image.slice(1))), item.image);
  }
  // Product images may be remote (placehold.co) or local
  for (const item of PRODUCTS) {
    assert.ok(typeof item.image === 'string' && item.image.length > 0, 'product image must be non-empty string');
  }
});

test('every product has valid structure', () => {
  for (const product of PRODUCTS) {
    assert.ok(product.id, `product ${product.id} must have id`);
    assert.ok(product.name, `product ${product.id} must have name`);
    assert.ok(product.category, `product ${product.id} must have category`);
    assert.ok(product.variants.length > 0, `product ${product.id} must have at least one variant`);
    for (const v of product.variants) {
      assert.ok(v.sku, `variant in ${product.id} must have sku`);
      assert.ok(v.price > 0, `variant in ${product.id} must have positive price`);
    }
  }
});
