/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text, required) - Name of the person giving testimonial
      - `email` (text, required) - Email address
      - `message` (text, required) - Testimonial message
      - `rating` (integer, required) - Rating from 1-5
      - `company` (text, optional) - Company name
      - `role` (text, optional) - Job role/title
      - `approved` (boolean, default false) - Whether testimonial is approved for display
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public to insert testimonials
    - Add policy for public to read approved testimonials only
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  company text,
  role text,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (approved = true);
