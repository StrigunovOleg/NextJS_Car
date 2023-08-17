import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/dist/client/components/headers'


export const dynamic = 'force-dynamic'
import type { Database } from '@/database.types'

// new comment

export default async function About() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data } = await supabase.from('db_employees').select()
    return (
        <>
            <div className="bg-black p-6">
                <h1 className='mb-10'>About</h1>
                {data?.map((employee, i) =>
                    <div key={employee.id} className="mb-10 space-y-48 max-w-sm space-y-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {employee.name}
                                </h5>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
