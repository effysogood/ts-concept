// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally
{
  function readFile(fileName: string): string {
    if (fileName === 'not exist') {
      throw new Error(`file not exist: ${fileName}`);
    }
    return 'file contents 📁';
  }
  function closeFile(fileName: string) {
    //
  }

  const fileName = 'not exist';

  function run() {
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`Catched Error: ${error}`);
      return; // 리턴을 했음에도 finally 항상 실행!
    } finally {
      closeFile(fileName);
      console.log(`Fianlly Closed`);
    }
  }
  run();
}
