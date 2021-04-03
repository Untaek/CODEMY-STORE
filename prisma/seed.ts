import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const user1Obj = {
  email: 'wkblack11@gmail.com',
  name: 'Untaek',
  documents: {
    create: [
      {
        title: '리사이클러뷰에서 요소 제거하기',
        name: 'recyclerview_1',
        readme: 'RecyclerView를 사용하다보면, 중간에 일부 항목을 삭제하는 경우가 있습니다.',
        root: {
          entry: 'index.html',
          files: [
            {
              name: 'components',
              type: 'Directory',
              children: [
                {
                  name: 'index.html12312313123saddsdad1323',
                  type: 'File',
                  language: 'html',
                  value: '<html>\n  <script src="./main.js"></script>\n</html>\n',
                },
                { name: 'main.js', type: 'File', language: 'javascript', value: `alert('ha')\n` },
              ],
            },
            {
              name: 'readme.md',
              type: 'File',
              language: 'markdown',
              value:
                '## RecyclerView\n\nRecyclerView를 사용하다보면, 중간에 일부 항목을 삭제하는 경우가 있습니다.  \n서버에서 데이터를 삭제함과 동시에, 앱 UI에서도 삭제처리를 해줘야하는데요.\n',
            },
            {
              name: 'index.html',
              type: 'File',
              language: 'html',
              value: '<html>\n  <script src="./main.js"></script>\n</html>\n',
            },
            { name: 'main.ts', type: 'File', language: 'typescript', value: `alert('ha')\n` },
          ]
        },
        comments: {
          create: [
            {
              text: '감사합니다.'
            }
          ]
        }
      }
    ]
  }
}

const main = async () => {
  const user1 = await prisma.user.upsert({
    where: { email: 'wkblack11@gmail.com' },
    update: {},
    create: user1Obj
  })

  await prisma.sourceLanguage.upsert({
    where: { key: 'javascript' },
    update: {},
    create: {
      key: 'javascript',
      name: 'JavaScript',
    }
  })

  await prisma.sourceLanguage.upsert({
    where: { key: 'html' },
    update: {},
    create: {
      key: 'html',
      name: 'HTML',
    }
  })

  await prisma.sourceLanguage.upsert({
    where: { key: 'typescript' },
    update: {},
    create: {
      key: 'typescript',
      name: 'TypeScript',
    }
  })

  await prisma.sourceLanguage.upsert({
    where: { key: 'markdown' },
    update: {},
    create: {
      key: 'markdown',
      name: 'Markdown',
    }
  })

  const u = await prisma.user.findUnique({
    where: {id: user1.id},
    include: {
      documents: true,
      likeDocuments: true
    }  
  })

  await prisma.userLikeDocument.upsert({
    where: { documentID_userID: { userID: u!.id, documentID: u!.documents[0].id } },
    update: {},
    create: {
      userID: u!.id,
      documentID: u!.documents[0].id
    }
  })

  await prisma.$disconnect()
}

main()