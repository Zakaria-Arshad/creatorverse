import { createClient } from '@supabase/supabase-js';

const URL = "https://fagrkjpqqgqwzdawpoud.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ3JranBxcWdxd3pkYXdwb3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NDE4MDgsImV4cCI6MjAzNDMxNzgwOH0.FOZ4QaAwIJNUKYujmGZLc0pMTepzlRD6v6pXxMQRG7Q"

export const supabase = createClient(URL, API_KEY);
