import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    res.send(`
      <html>
        <head>
          <title>Task API</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              padding-top: 50px;
              background-color: #f9f9f9;
            }
            h1 {
              color: #4CAF50;
            }
            code {
              background: #eee;
              padding: 5px;
              border-radius: 4px;
            }
          </style>
        </head>
        <body>
          <h1>Task API is Running</h1>
          <p>Use <code>/api/tasks</code> to interact with the task API.</p>
        </body>
      </html>
    `);
  }
}
