import Queue from './index.js';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('初始化时队列为空', () => {
    expect(queue.size).toBe(0);
    expect(queue.peek()).toBeUndefined();
  });

  describe('enqueue', () => {
    test('可以添加单个元素', () => {
      queue.enqueue(1);
      expect(queue.size).toBe(1);
      expect(queue.peek()).toBe(1);
    });

    test('可以添加多个元素', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size).toBe(3);
      expect(queue.peek()).toBe(1);
    });
  });

  describe('dequeue', () => {
    test('空队列返回undefined', () => {
      expect(queue.dequeue()).toBeUndefined();
    });

    test('可以移除并返回第一个元素', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toBe(1);
      expect(queue.size).toBe(1);
      expect(queue.peek()).toBe(2);
    });

    test('按照FIFO顺序移除元素', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.size).toBe(0);
    });
  });

  describe('peek', () => {
    test('空队列返回undefined', () => {
      expect(queue.peek()).toBeUndefined();
    });

    test('返回第一个元素但不移除', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
      expect(queue.size).toBe(2);
    });
  });

  describe('clear', () => {
    test('清空队列', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.clear();
      expect(queue.size).toBe(0);
      expect(queue.peek()).toBeUndefined();
    });
  });

  describe('迭代器', () => {
    test('可以迭代队列中的所有元素', () => {
      const values = [1, 2, 3];
      values.forEach(value => queue.enqueue(value));

      const result = [...queue];
      expect(result).toEqual(values);
    });

    test('空队列迭代不产生任何值', () => {
      expect([...queue]).toEqual([]);
    });
  });
});
