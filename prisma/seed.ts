import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const user1 = await prisma.user.upsert({
    where: { email: 'wkblack11@gmail.com' },
    update: {},
    create: {
      email: 'wkblack11@gmail.com',
      name: 'Untaek',
      documents: {
        create: [
          {
            title: '리사이클러뷰에서 요소 제거하기',
            name: 'recyclerview_1',
            readme: 'RecyclerView를 사용하다보면, 중간에 일부 항목을 삭제하는 경우가 있습니다.',
            root: {

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
  })

  await prisma.$disconnect()
}

main()