-- Fix RLS policies for contact_submissions table

-- First, drop existing policies if any
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated updates" ON contact_submissions;

-- Disable RLS temporarily
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create new policy that allows anyone to insert
CREATE POLICY "Enable insert for anon users" 
ON contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policy for reading (only authenticated users can read)
CREATE POLICY "Enable read for authenticated users only" 
ON contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- Create policy for updating (only authenticated users can update)
CREATE POLICY "Enable update for authenticated users only" 
ON contact_submissions 
FOR UPDATE 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Create policy for deleting (only authenticated users can delete)
CREATE POLICY "Enable delete for authenticated users only" 
ON contact_submissions 
FOR DELETE 
TO authenticated 
USING (true);
