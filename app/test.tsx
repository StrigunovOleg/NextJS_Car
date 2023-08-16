'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

import type { Database } from '../database.types'



export default function Test() {
    const supabase = createClientComponentClient<Database>();
    useEffect(() => {
        const fetchEmployeeList = async (): Promise<void> => {
          const { data } = await supabase
            .from('cars')
            .select('*');
          //! Should handle error?
          console.log(data)
        };
        fetchEmployeeList();
      }, []);

      
}