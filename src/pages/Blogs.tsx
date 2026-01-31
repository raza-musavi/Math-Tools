import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  TrendingUp,
  Calculator,
  Lightbulb,
  Hash
} from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: typeof Calculator;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding HCF and LCM: A Complete Guide',
    excerpt: 'Learn the fundamentals of Highest Common Factor and Least Common Multiple with practical examples and real-world applications.',
    content: `The Highest Common Factor (HCF) and Least Common Multiple (LCM) are fundamental concepts in mathematics that have numerous practical applications.

## What is HCF?

The HCF of two or more numbers is the largest number that divides each of them exactly. For example, HCF(12, 18) = 6 because 6 is the largest number that divides both 12 and 18 without leaving a remainder.

## What is LCM?

The LCM of two or more numbers is the smallest number that is a multiple of each of them. For example, LCM(4, 6) = 12 because 12 is the smallest number that appears in both the multiplication tables of 4 and 6.

## Relationship Between HCF and LCM

For any two numbers a and b:
HCF(a, b) × LCM(a, b) = a × b

This relationship is incredibly useful for solving problems quickly.`,
    author: 'Dr. Sarah Mathers',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Fundamentals',
    icon: Calculator,
    tags: ['HCF', 'LCM', 'Mathematics', 'Education']
  },
  {
    id: 2,
    title: 'The Euclidean Algorithm: Ancient Wisdom in Modern Computing',
    excerpt: 'Discover how a 2300-year-old algorithm continues to power modern cryptography and computer science.',
    content: `The Euclidean algorithm, described by Euclid around 300 BCE, remains one of the most efficient methods for computing the greatest common divisor of two numbers.

## How It Works

The algorithm is based on the principle that the GCD of two numbers also divides their difference. In modern terms:

GCD(a, b) = GCD(b, a mod b)

This recursive definition leads to an incredibly efficient algorithm that runs in logarithmic time.

## Applications Today

1. **Cryptography**: RSA encryption relies on finding GCDs for key generation
2. **Fraction Simplification**: Reducing fractions to lowest terms
3. **Diophantine Equations**: Solving equations with integer solutions
4. **Computer Graphics**: Simplifying ratios and proportions`,
    author: 'Prof. Alan Turing II',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Algorithms',
    icon: TrendingUp,
    tags: ['Algorithm', 'History', 'Cryptography', 'Computing']
  },
  {
    id: 3,
    title: '10 Real-World Applications of HCF in Daily Life',
    excerpt: 'From music to construction, discover how HCF plays a surprising role in everyday situations.',
    content: `You might think HCF is just a classroom concept, but it appears everywhere in daily life!

## 1. Music and Rhythm

When combining different rhythmic patterns, musicians use HCF to find the common beat. If one instrument plays every 4 beats and another every 6 beats, they'll sync up every HCF(4,6) = 2 beats.

## 2. Tiling and Construction

To tile a rectangular floor without cutting tiles, you need tiles whose dimensions divide both the length and width of the room. HCF helps find the largest possible tile size.

## 3. Recipe Scaling

When scaling recipes up or down, HCF helps find the simplest ratio of ingredients.

## 4. Event Scheduling

If two events repeat every 15 and 20 days respectively, they'll coincide every HCF(15,20) = 5 days.

## 5. Gear Ratios

Mechanical engineers use HCF to simplify gear ratios for optimal performance.`,
    author: 'Maria Rodriguez',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Applications',
    icon: Lightbulb,
    tags: ['Real World', 'Applications', 'Daily Life', 'Practical Math']
  },
  {
    id: 4,
    title: 'Prime Factorization Methods Explained',
    excerpt: 'Master different techniques for finding prime factors and how they relate to HCF calculations.',
    content: `Prime factorization is the foundation of many number theory concepts, including HCF and LCM calculations.

## Division Method

Repeatedly divide the number by the smallest possible prime until you reach 1.

Example: 84
84 ÷ 2 = 42
42 ÷ 2 = 21
21 ÷ 3 = 7
7 ÷ 7 = 1

So, 84 = 2² × 3 × 7

## Factor Tree Method

Break down the number into any two factors, then continue breaking down until all factors are prime.

## Using Prime Factorization for HCF

To find HCF using prime factors:
1. Find prime factorization of both numbers
2. Identify common prime factors
3. Take the lowest power of each common factor
4. Multiply them together

Example: HCF(84, 140)
84 = 2² × 3 × 7
140 = 2² × 5 × 7
HCF = 2² × 7 = 28`,
    author: 'Dr. Sarah Mathers',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Techniques',
    icon: Hash,
    tags: ['Prime Numbers', 'Factorization', 'Techniques', 'Number Theory']
  },
  {
    id: 5,
    title: 'HCF vs GCD vs GCF: What\'s the Difference?',
    excerpt: 'Clear up the confusion between these commonly used terms in mathematics.',
    content: `If you've ever wondered whether HCF, GCD, and GCF mean different things, you're not alone!

## The Short Answer

They're all the same thing! Different regions and textbooks use different terms:

- **HCF** (Highest Common Factor): Most common in UK, India, Australia
- **GCD** (Greatest Common Divisor): Preferred in USA, computer science
- **GCF** (Greatest Common Factor): Alternative US terminology

## Regional Preferences

| Region | Preferred Term |
|--------|---------------|
| United Kingdom | HCF |
| United States | GCD/GCF |
| India | HCF |
| Australia | HCF |
| Computer Science | GCD |

## Why GCD in Programming?

Most programming languages use gcd() as the function name, following mathematical convention. This standardization helps developers worldwide understand the code.

## Conclusion

Regardless of which term you use, the concept remains identical: the largest positive integer that divides two or more numbers without a remainder.`,
    author: 'Prof. Alan Turing II',
    date: '2023-12-28',
    readTime: '4 min read',
    category: 'Fundamentals',
    icon: BookOpen,
    tags: ['Terminology', 'GCD', 'GCF', 'Clarification']
  },
  {
    id: 6,
    title: 'Advanced HCF Problems for Competitive Exams',
    excerpt: 'Challenge yourself with these carefully selected problems from competitive mathematics exams.',
    content: `Test your understanding with these progressively difficult HCF problems.

## Level 1: Basic

**Problem 1**: Find HCF(144, 180, 240)

*Solution*: Using prime factorization:
144 = 2⁴ × 3²
180 = 2² × 3² × 5
240 = 2⁴ × 3 × 5
HCF = 2² × 3 = 12

## Level 2: Intermediate

**Problem 2**: Two numbers are in the ratio 3:4 and their HCF is 5. Find the numbers.

*Solution*: Let the numbers be 3x and 4x.
HCF(3x, 4x) = x × HCF(3, 4) = x × 1 = x
Given HCF = 5, so x = 5
Numbers are 15 and 20.

## Level 3: Advanced

**Problem 3**: Find the largest number that divides 1251, 9377, and 15628 leaving remainders 1, 2, and 3 respectively.

*Solution*: 
Required number = HCF(1251-1, 9377-2, 15628-3)
= HCF(1250, 9375, 15625)
= 625`,
    author: 'Maria Rodriguez',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'Problems',
    icon: TrendingUp,
    tags: ['Competitive Exams', 'Problems', 'Advanced', 'Practice']
  }
];

export function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const categories = [...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Math Blogs</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of articles about HCF, mathematics, and number theory. 
            Learn new concepts and discover practical applications.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const Icon = post.icon;
            const isExpanded = expandedPost === post.id;
            
            return (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  {isExpanded && (
                    <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                      <div className="prose prose-sm max-w-none">
                        {post.content.split('\n\n').map((paragraph, idx) => {
                          if (paragraph.startsWith('## ')) {
                            return <h4 key={idx} className="font-semibold mt-4 mb-2">{paragraph.replace('## ', '')}</h4>;
                          }
                          if (paragraph.startsWith('|')) {
                            // Simple table rendering
                            const rows = paragraph.split('\n');
                            return (
                              <table key={idx} className="w-full text-sm my-4">
                                <tbody>
                                  {rows.map((row, ridx) => {
                                    const cells = row.split('|').filter(c => c.trim());
                                    if (cells.length === 0) return null;
                                    return (
                                      <tr key={ridx} className={ridx === 0 ? 'font-semibold border-b' : ''}>
                                        {cells.map((cell, cidx) => (
                                          <td key={cidx} className="py-1 px-2">{cell.trim()}</td>
                                        ))}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            );
                          }
                          return <p key={idx} className="mb-2 text-muted-foreground">{paragraph}</p>;
                        })}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3 pt-4 border-t">
                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full gap-2"
                    onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
