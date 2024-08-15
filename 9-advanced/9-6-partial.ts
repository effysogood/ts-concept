{
  /**
   * Partial 부분적인 타입 제어
   */

  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = {
    title: 'Study TypeScript',
    description: 'Study Hard',
    label: 'Programming',
    priority: 'high',
  };

  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
